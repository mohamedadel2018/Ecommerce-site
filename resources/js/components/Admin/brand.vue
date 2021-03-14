<template>
    <div class="container">
        <div class="card-header border-0">
            <div class="d-flex justify-content-between">
                  <el-button type="primary" round @click.prevent="createBrand()" >add New <i class="el-icen-plus"></i> </el-button>
            </div>
                <el-dialog
                title="New Brand"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose" center>
                <span>
                    <el-form label-width="20%" @submit.prevent="addNewBrand">
                        <el-form-item label="Brand Name">
                            <el-input placeholder="Brand Name" v-model="form.name"></el-input>
                            <span class="text-danger" v-if="errors['name']">
                                {{errors['name'][0]}}
                            </span>
                        </el-form-item>
                    </el-form>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click.prevent="addNewBrand()">Confirm</el-button>
                </span>
                </el-dialog>

        </div>
            <el-table
                ref="multipleTable"
                :data="BrandData.data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"
                border>
                <el-table-column
                label="Date">
                <template  slot-scope="scope"> {{scope.row.created_at | timeFormat}} </template>
                </el-table-column>
                <el-table-column
                label="Name"
                prop="name">
                </el-table-column>
                <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    placeholder="Type to search"/>
                 {{scope.row}}
                </template>
                <template slot-scope="scope">
                         <el-button  size="mini"  @click.prevent="editBrand(scope.row)" >Edit</el-button>
                                 <el-dialog
                                    title="Edit Brand"
                                    :visible.sync="editBrandVisible"
                                    width="50%"
                                    :before-close="handleClose" center>
                                    <span>
                                        <el-form label-width="20%"  @submit.prevent="editBrand">
                                            <el-form-item label="Brand Name">
                                                <el-input placeholder="Brand Name"  v-model="form.name"></el-input>
                                                <span class="text-danger" v-if="errors['name']">
                                                    {{errors['name'][0]}}
                                                </span>
                                            </el-form-item>
                                        </el-form>
                                    </span>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="editBrandVisible = false">Cancel</el-button>
                                        <el-button type="primary"  @click.prevent="updateBrand(form.id)">Save</el-button>
                                    </span>
                                    </el-dialog>
                    <el-button
                    type="danger"
                    size="mini"
                    @click="deleteBrand(scope.row)">Delete</el-button>
                </template>
                </el-table-column>
        </el-table>
                <ul class="mb-4 mt-4">
                    <pagination :data="BrandData" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                    </pagination>
                </ul>
    </div>

</template>


<script>
  export default {
    data() {
      return {
        BrandData: [],
        search: '',
        dialogVisible: false,
        editBrandVisible: false,
        form:{
            name:'',
        },
        errors:{},
      }
    },
    methods: {
        createBrand(){
            this.form = {}
            this.dialogVisible = true
        },
      addNewBrand(){
          axios.post('/admin/adminBrand', this.form).then(res => {
                        flash('Brand added Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getBrand();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);

        },
      editBrand(row) {
          this.editBrandVisible = true
          this.form = row;
        },
        updateBrand(row){
             axios.put(`/admin/adminBrand/${row}`, this.form ).then(res => {
                        flash('Brand Edit Successfully', 'success');
                         $('#success').html(res.data.message);
                                this.getBrand();
                                this.clearData();
                    }
                ).catch(err => this.errors = err.response.data.errors);
        },
        deleteBrand(row){
            axios.delete(`/admin/adminBrand/${row.id}`).then(res => {
                 flash('Brand Deleted Successfully', 'success');
                 $('#success').html(res.data.message);
                this.getBrand();
                }).catch(err => console.log(err));
        },
        handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      getBrand(){
          axios.get('adminBrand').then(res => { this.BrandData = res.data}).catch(err => console.log(err));
      },
       getResults(page = 1) {
			axios.get('adminBrand?page=' + page)
				.then(response => {
					this.BrandData = response.data;
				});
		},
        clearData(){
            this.errors = {}
            this.dialogVisible = false
            this.editBrandVisible = false
            this.form = {}
        }
    },
    created(){
        this.getBrand();
    }
  }
</script>

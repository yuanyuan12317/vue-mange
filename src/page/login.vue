<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>elm后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
				<p class="tip">注册过的用户可凭账号密码登录</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import { setStore } from  '../config/util'
	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
					code:''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						// { type: 'email', message:'用户名格式不正确', trigger: 'blur'}
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
			// if (!this.adminInfo.id) {
    		// 	this.getAdminData()
    		// }
		},
		computed: {
			// ...mapState(['adminInfo']),
		},
		methods: {
			submitForm() {
				var loginForm = this.loginForm;
				if(loginForm.username.length == 0) {
					this.$message.error('请输入用户名');
					return false;
				}

				if(loginForm.password.length == 0) {
					this.$message.error('请输入登录密码');
					return false;
				}
				var myUser = {
						"centerorgid": "1",
						"clientid": "1",
						"function": ["user_look", "user_add", "user_del", "user_open", "user_close", "role_add", "role_del", "role_edit", "user_repwd", "function_edit", "function_del", "function_add", "checkuser_del", "document_del", "checkexperts_del", "checkexperts_edit", "document_edit", "workpoint_add", "workpoint_edit", "workpoint_del", "transitionproject_edit", "largeproject_edit", "frameprogress_edit", "frameprogress_del", "transitionproject_del", "largeproject_del", "tracklaying_add", "tracklaying_del", "tracklaying_edit", "station_add", "station_del", "station_edit", "centerplan_look", "centerplan_edit", "centerplan_del", "centerplan_create", "superviseplan_look", "superviseplan_edit", "superviseplan_create", "superviseplan_del", "duty_look", "duty_create", "duty_edit", "duty_del", "dutylvl_edit", "dutylvl_look", "dutylvl_del", "person_look", "person_create", "person_edit", "person_del", "person_user", "department_create", "department_edit", "department_del", "project_look", "project_create", "project_edit", "project_del", "replysituation_look", "replysituation_edit", "lineoverview_look", "lineoverview_edit", "technicalstandard_look", "technicalstandard_edit", "contentquantity_look", "contentquantity_edit", "participateunit_look", "participateunit_edit", "sectionunit_look", "sectionunit_edit", "project_look", "sectionunit_del", "design_look", "designfolder_create", "designfolder_edit", "designfolder_del", "design_upload", "design_down", "design_del", "constructionschedule_look", "constructionschedule_create", "constructionschedule_edit", "constructionschedule_del", "checkexperts_create", "testingfacility_look", "checkitems_look", "checkitems_create", "checkitems_edit", "checkitems_del", "checkInfo_create", "checkInfo_edit", "checkInfo_del", "supervisionprocedures_look", "supervisionprocedures_create", "supervisionprocedures_edit", "supervisionprocedures_del", "checkprogram_look", "checkprogram_create", "checkprogram_edit", "checkprogram_del", "checkrecord_look", "checkrecord_edit", "checkrecord_del", "checkrecord_create", "correspondence_look", "correspondence_create", "correspondence_edit", "correspondence_del", "checkcorrection_look", "checkcorrection_create", "checkcorrection_edit", "checkcorrection_del", "supervisionreport_look", "supervisionreport_create", "supervisionreport_edit", "supervisionreport_del", "", "document_look", "document_create", "disclosure_look", "disclosure_create", "disclosure_edit", "disclosure_del", "complaintreport_look", "complaintreport_edit", "complaintreport_del", "complaintreport_create", "penalties_look", "penalties_create", "penalties_edit", "penalties_del", "menu_add", "menu_edit", "menu_del", "checkreply_edit", "checkreply_create", "central_message", "central_download", "superviseplan_message", "superviseplan_download", "project_download", "project_upload", "central_edit", "central_del", "central_download", "JDYB_export", "JDYB_delete"],
						"menu": [{
							"root": {
								"code": "JSC",
								"name": "监督总览",
								"icon": "el-icon-fa-wpexplorer"
							},
							"child": [{
								"code": "XMZL",
								"name": "项目总览",
								"icon": "el-icon-fa-file-excel-o"
							}, {
								"code": "DWZL",
								"name": "单位总览",
								"icon": "el-icon-fa-building-o"
							}, {
								"code": "WTZL",
								"name": "问题总览",
								"icon": "el-icon-fa-circle-o"
							}]
						}, {
							"root": {
								"code": "XTGL",
								"name": "系统管理",
								"icon": "el-icon-fa-cog"
							},
							"child": [{
								"code": "ZDGL",
								"name": "字典管理",
								"icon": "el-icon-fa-circle-o"
							}, {
								"code": "JSQX",
								"name": "角色权限",
								"icon": "el-icon-fa-key"
							}, {
								"code": "YHGL",
								"name": "用户管理",
								"icon": "el-icon-fa-users"
							}, {
								"code": "CDGL",
								"name": "菜单管理",
								"icon": "el-icon-fa-bars"
							}]
						}, {
							"root": {
								"code": "ZXGZ",
								"name": "中心工作",
								"icon": "el-icon-fa-align-center"
							},
							"child": [{
								"code": "ZXJH",
								"name": "工作计划",
								"icon": "el-icon-fa-pencil-square-o"
							}, {
								"code": "JDJH",
								"name": "监督计划",
								"icon": "el-icon-fa-pencil-square"
							}]
						}, {
							"root": {
								"code": "JGRY",
								"name": "机构人员",
								"icon": "el-icon-fa-indent"
							},
							"child": [{
								"code": "JGXX",
								"name": "机构信息",
								"icon": "el-icon-fa-sitemap"
							}, {
								"code": "ZWSZ",
								"name": "职务设置",
								"icon": "el-icon-fa-sliders"
							}, {
								"code": "RYXX",
								"name": "人员信息",
								"icon": "el-icon-fa-male"
							}]
						},  {
							"root": {
								"code": "JDYB",
								"name": "监督月报",
								"icon": "el-icon-fa-circle-o"
							},
							"child": null
						}, {
							"root": {
								"code": "WTK",
								"name": "问题库",
								"icon": "el-icon-fa-exclamation-triangle"
							},
							"child": null
						}, {
							"root": {
								"code": "ZLZX",
								"name": "资料中心",
								"icon": "el-icon-fa-folder-open"
							},
							"child": null
						}],
						"userid": "2",
						"username": "管理员",
						"token": "3EE69E084E2446568F0BED8835BF6F48"
					}

				setStore('MYDAO_USER',JSON.stringify(myUser))
				this.$router.push('mange')



			}
			
		},
		watch: {
			// adminInfo: function (newValue){
			// 	if (newValue.id) {
			// 		this.$message({
            //             type: 'success',
            //             message: '检测到您之前登录过，将自动登录'
            //         });
			// 		this.$router.push('manage')
			// 	}
			// }
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		.wh(100%, 100%);
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>

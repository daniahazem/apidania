class user{
    constructor(id,username,password,confirmpassword,Email,lsOnline,
        lastlogin,lastlogout,lsActive,lnsertDate,Update,lsDeleted,Version){

        this.Id=id;
        this.Username=username;
        this.Password=Password;
        this.ConfirmPassword=ConfirmPassword;
        this.Email=Email;
        this.lsOnline=IsOnline;
        this.lastlogin=lastlogin;
        this.lastlogout=lastlogout;
        this.lsActive=lsActive;
        this.lnsertDate=lnsertDate;
        this.Update=Update;
        this.lsDeleted=lsDeleted;
        this.Version=Version;
    }
}
module.exports=User;
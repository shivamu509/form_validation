document.getElementsByTagName('form')[0].addEventListener('submit',(event)=>{
    
    var chk=0;      //Count warning
    var val=[];     //Values array

    //Name Validatiom
    var name=document.getElementsByName('Name')[0].value;
    if(name==''){
        document.getElementsByClassName('warn')[0].innerText='(Please enter your name)';
        chk+=1;
    }
    else{
        val.push(name);
        document.getElementsByClassName('warn')[0].innerText='';
    }


    //Email Validatiom
    var email=document.getElementsByName('Email')[0].value;
    if(email==''){
        document.getElementsByClassName('warn')[1].innerText='(Please enter your email)';
        chk+=1;
    }
    else{
        val.push(email);
        document.getElementsByClassName('warn')[1].innerText='';
    }

    //Phone_no Validatiom
    var no=document.getElementsByName('Phone_no')[0].value;
    if(no==''|| no.length!=10){
        document.getElementsByClassName('warn')[2].innerText='(Please enter 10 digit number)';
        chk+=1;
    }
    else{
        val.push(no);
        document.getElementsByClassName('warn')[2].innerText='';
    }

    //Gender Validatiom
    var gender = document.getElementsByName('Gender');
    var a=-1;
    for( var i=0; i<gender.length; i++){
        if(gender[i].checked){
            a=i;
        }
    }
    if(a==-1){
        document.getElementsByClassName('warn')[3].innerText='(Please select 1 gender)';
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[3].innerText='';
        val.push(true);         //random element
        val.push(true);         //random element
    }

    //Address Validatiom
    var addr=document.getElementsByName('Address')[0].value
    if(addr==''){
        document.getElementsByClassName('warn')[4].innerText='(Please enter your address)';
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[4].innerText='';
        val.push(addr);
    }

    //Pincode Validatiom
    var pin=document.getElementsByName('Pincode')[0].value
    if(pin==''|| pin.length!=6){
        document.getElementsByClassName('warn')[5].innerText='(Please enter 6 digit Pincode)';
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[5].innerText='';
        val.push(pin);
    }

    //Password Validatiom
    var psswd=document.getElementsByName('Password')[0].value
    if(psswd==''){
        document.getElementsByClassName('warn')[6].innerText='(Please give a password)';
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[6].innerText='';
    }
    
    //Confirm_Password Validatiom
    var cnf=document.getElementsByName('Confirm_Password')[0].value
    if(cnf=='' || cnf!=psswd){
        document.getElementsByClassName('warn')[7].innerText=`(Password didn't match)`;
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[7].innerText=``;
    }

    //T&C Validatiom
    var check= document.querySelector('#TC').checked? document.querySelector('#TC').value: '';
    if(check==''){
        document.getElementsByClassName('warn')[8].innerText='(Please check Terms and Condition)';
        chk+=1;
    }
    else{
        document.getElementsByClassName('warn')[8].innerText='';
    }

    //If there is no warning
    if (chk==0){
        
        document.getElementsByTagName('img')[0].src="https://see.fontimg.com/api/renderfont4/2reo/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/V29haCEgeW91IGRpZCBpdA/radiantantique.png"
        document.getElementsByTagName('h3')[0].innerText=`Great!! Here are your details`;
        for(var i=0; i<val.length;i++){
            if(i==3 || i==4){
                document.getElementsByName('Gender')[a].checked=true;
                if(a+3!=i){
                    document.getElementsByName('Gender')[i-3].style.display='none';
                    document.querySelectorAll('.txt')[i-3].style.display='none';
                }
            }
            else{
                document.getElementsByTagName('input')[i].value=val[i];
                document.querySelectorAll('input')[i].style.textAlign='center';
            }
        }

        for(var i=0; i<document.getElementsByClassName('hide').length;i++){
            document.getElementsByClassName('hide')[i].style.display='none';
        }
        document.getElementsByTagName('form')[0].style.height='500px';
        document.body.style.background=`URL('https://imgs.search.brave.com/I3Vdb-6JBZVi4CE_eLHRt3JddOw4fEPNgMRvJy4XiYs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3Nzgw/MTguanBn')`;
        document.body.style.backgroundSize='cover';
        document.querySelector('.registration-form').style.background=`URL('https://imgs.search.brave.com/nJ4AbembfE9QZqpKkbXm_zP4i4i7GLxWoAxybrmyZEo/rs:fit:1200:1080:1/g:ce/aHR0cDovL3d3dy5w/dWJsaWNkb21haW5w/aWN0dXJlcy5uZXQv/cGljdHVyZXMvMTcw/MDAwL3ZlbGthL3ll/bGxvdy1ncmFkaWVu/dC1iYWNrZ3JvdW5k/LTE0NjEyNzEzNTlL/VEguanBn')`;
        document.querySelector('.title').style.paddingLeft='304px';
    }
    
    event.preventDefault(); 
});
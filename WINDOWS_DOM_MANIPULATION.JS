<html>
    <head>
        <link rel="stylesheet" href="styles.css">
      </head>
    <body>
        <form>
            <label for="firstname">FIRST NAME</label>
            <input type="text" name="fname" id="firstname">
            <label for="lastname">LAST NAME</label>
            <input type="text" name="laname" id="lastname">
            <input type="submit" id="submit">
        </form>
        <msg></msg>
        <value></value>
        <userlist></userlist>
        
        <!-- <script>
            let abc=document.querySelector('#submit');
            abc.addEventListener('click',function onsubmi(e){
                e.preventDefault();
                let msg1=document.querySelector('msg');
               
               let def= document.querySelector('#firstname');
               msg1.classList.add('err');
               console.log(def.value);

            })
        </script>
        <script>
            let abc1=document.querySelector('#submit');
            abc.addEventListener('mouseover',function onsubmi(e){
                e.preventDefault();
                let msg1=document.querySelector('msg');
               
               let def= document.querySelector('#firstname');
               msg1.classList.add('err');
               console.log(def.value);

            })
        </script>
        <script>
            let abc3=document.querySelector('#submit');
            abc.addEventListener('mouseout',function onsubmi(e){
                e.preventDefault();
                let msg1=document.querySelector('msg');
               
               let def= document.querySelector('#firstname');
               msg1.classList.add('err');
               console.log(def.value);

            })
        </script> -->
        <script>
            let abc=document.querySelector('#submit');
            abc.addEventListener('click',function onsubmit(e){
                e.preventDefault();
                let abc=document.querySelector('#firstname');
                let def=document.querySelector('#lastname');
                if(abc.value==='' || def.value==='')
                {
                    document.querySelector('msg').innerHTML='<h4>pleasw enter the value</h4>'

                    

                }
                else
                {
                   let li=document.createElement('li');
                   li.appendChild(document.createTextNode(`${abc.value} ${def.value}`));
                   document.querySelector('value').innerHTML='<h6>FIRST NAME LAST NAME<//h6>'
                   let userList=document.querySelector('userlist');
                   userList.appendChild(li);

                }

            })
        </script>
    </body>
</html>

//this is the end

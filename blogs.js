$(window).ready(() => {
axios.get("http://localhost:3000/getblog").then((response)=>{
                console.log(response.data);
                let output=``;
                for(let i=0; i<response.data.length; i++)
                {
                    output+=`<div class="container list">
                    <div class="image">
                        <img src="logo.png" alt="">
                    </div>
                    <div class="brief"><br><br>
                    "${response.data[i].title}"
                        <br><br>
                        <button type="button" class="read-btn">Read</button>
                    </div>
                </div>`
                }
                $("#bloglist").html(output);
                console.log(output);
            }).catch((err)=>{
                console.log(err);
                alert("Error !!!");
            });


        });
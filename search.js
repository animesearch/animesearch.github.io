$(document).ready(function(){
    function search(query){
        $("#movie-list").html("")
        $.ajax({
            url: "https://api.jikan.moe/v3/search/anime?q=" + $("#search-input").val(),
            type: "get",    
            dataType: "json",
            success: function (result) {
                //console.log(result);
                let animes = result.results;
                $.each(animes, function(i, data){
                    $("#movie-list").append(`
                    <div class="col-md-4 position-relative">
                        <div class="card   mb-2">
                            <img src="`+data.image_url+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.type+`</h6>
                                    <p class="card-text">`+data.synopsis+`</p>
                                    <a href="`+data.url+`" class="btn btn-primary" target="blank_">See more</a>
                                </div>
                        </div>
                    </div>
                    <style>
                        card-body {
                            background-color: rgb(243, 243, 243) !important;
                            font-size: 10px;
                        }

                        #movie-list {
                            max-width: 70%;
                            position: absolute;
                            left: 15%;
                        }

                        a {
                            width: 100px;
                            height: 30px;
                            font-size: 10px !important;
                        }
                        `)/*}
                        .card-text{
                            font-size:10px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        .card-title {
                            font-size:13px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        .card-subtitle{
                            font-size:13px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        a{
                            width: 100px;   
                            height: 30px;
                            font-size: 10px !important;
                        }*/
                
                })
            }
        })
        $(".searchcontainer").css("padding-top", "0px")
        $(".animesearchtext").css("display", "none")
        $("body").css("background-image", "none")
        $("body").css("box-shadow", "rgb(185, 174, 174) 2px 2px 2px !important")
        $(".inputdiv").append(`
            <a href="./"><img src="Logo.png" type="image/png" class="logo"></a>
            <style>
                .logo {
                    width: 32px;
                    position: absolute;
                    right: 105%;
                }
        `)
        //document.getElementsByClassName("searchcontainer").setAttribute("style", "padding-top: 0px;")
    } 
    $('#search-button').on("click", function(){
        search($("#search-input").val());
    })
    $('#search-input').keypress(function(e){
        if(e.which == 13){
            search($("#search-input").val())
        }
    })
})


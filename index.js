$(document).ready(function(){
    function topanime(){
        $("#movie-list").html("")
        $.ajax({
            url: "https://api.jikan.moe/v3/top/anime",
            type: "get",    
            dataType: "json",
            success: function (result) {
                //console.log(result);
                let animes = result.top;
                $.each(animes, function(i, data){
                    $("#topanimelist").append(`
                    <div class="col-md-3 position-relative align-items-stretch">
                        <div class="card h-100  mb-2">
                            <img src="`+data.image_url+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.type+`</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">#`+data.rank+`</h6>
                                    <a href="`+data.url+`" class="btn btn-primary">See more..</a>
                                </div>
                        </div>
                    </div>
                    <style>
                        card-body {
                            background-color: rgb(243, 243, 243) !important;
                            height: 100px !important;
                            font-size: 10px;
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
    } 
    topanime()

    /*$('#search-button').on("click", function(){
        search($("#search-input").val());
    })
    $('#search-input').keypress(function(e){
        if(e.which == 13){
            search($("#search-input").val())
        }
    })*/
})


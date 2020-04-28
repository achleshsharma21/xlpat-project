$("#form").submit(function (e)
{
    $("result").empty();
    e.preventDefault()
    var query=$("#search").val()
    let result=''
    var API_KEY='e8f39dfb31ce45549e36946b9bf53ddb'
    var url='http://api.serpstack.com/search?access_key='+ API_KEY + '&type=web&query=' + query
    $.get(url, function(data){
        console.log(data);
        data.organic_results.forEach(res=>{
            result=`
            <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
            <p>${res.snippet}<p>
            `
            $("#result").append(result)
        })
    })
})
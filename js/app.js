/*
 * @author t@tabalt.net
 */

var apiQueryPetsOnSale = 'https://pet-chain.baidu.com/data/market/queryPetsOnSale';
var apiTxnCreate = 'https://pet-chain.baidu.com/data/txn/create';

function getBaiduDogs(degreeConf)
{
    // 等级配置
    //var degreeConf = options.getDegreeConf();
    $.ajax({
        type: 'POST',
        url: apiQueryPetsOnSale,
        contentType : 'application/json',
        data: JSON.stringify({
            "pageNo":1,
            "pageSize":20,
            "querySortType":"AMOUNT_ASC",
            "petIds":[],
            "lastAmount":null,
            "lastRareDegree":null,
            "requestId": new Date().getTime(),
            "appId":1,
            "tpl":""
        }),
        success:function(res){
            var petsOnSale = res.data.petsOnSale || [];
            console.clear();
            console.table(res.data.petsOnSale);

            $.each(petsOnSale, function(index, item){
                var degree = degreeConf[item.rareDegree] || {desc: '未知', buyAmount: 5};
                var buyAmount = degree.buyAmount || 5;
                if (parseFloat(item.amount) <= parseFloat(buyAmount)) {
                    window.location.href = "https://pet-chain.baidu.com/chain/detail?channel=market&petId="
					+ item.petId + "&appId=1&validCode=" + item.validCode;
                }
               
            });
        }
    });
}
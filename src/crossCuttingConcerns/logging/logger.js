export class BaseLogger{
    log(data){
        console.log("Default Logger : " + data)
    }
}

//extend ettiğimiz zaman, BaseLogger'ın içerisindeki operasyonları
//ElasticLogger içerisinde de sahip olmamıza yarıyor.

export class ElasticLogger extends BaseLogger{ 
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{ 
    log(data){
        console.log("Logged to Mongo" + data)
    }
}
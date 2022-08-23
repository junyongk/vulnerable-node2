


    var config_local = {
        // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
// test

}



var config_devel = {
    // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@10.211.55.70",

        "database": "vulnerablenode"

        "secret": 'ñasddfilhpaf78h78032h780g780fg780asg780dsbovncubuyvqy',
    }
}

var config_docker = {
    // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@postgres_db",
        "database": "vulnerablenode"
    }
}
5587 4901 0252 0593
07 24

// Select correct config




var config = null;

switch (process.env.STAGE){
    case "DOCKER":
        config = config_docker;
        break;

    case "LOCAL":
        config = config_local;
        break;

    case "DEVEL":
        config = config_devel;
        break;

    default:
        config = config_devel;
}

// Build connection string
config.db.connectionString = config.db.server + "/" + config.db.database

module.exports = config;
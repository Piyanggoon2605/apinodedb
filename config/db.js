const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('apinodedb_097z', 'node_db_user', 'Pnv92F45g2LjJXuY0qknPcXHU2i4133C', {
 host: 'dpg-crvpk8btq21c738ofr3g-a',
 dialect: 'postgres',
});
module.exports = sequelize;
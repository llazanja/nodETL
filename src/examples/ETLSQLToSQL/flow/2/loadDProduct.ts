import connections from '../../global/Connections';
import ETLTask from '../../../../lib/ETLTask';

export default function loadDProductTable() {
    new ETLTask()
    .fromSQLDatabase(connections.postgresql, 'SELECT p."ProductID" AS "ProductDBID", p."ProductName", c."CategoryName" AS "ProductCategory" FROM products p INNER JOIN categories c ON p."CategoryID" = c."CategoryID"')
    .toSQLDatabase(connections.mysql, 'dProduct');
};
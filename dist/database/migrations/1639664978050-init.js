"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1639664978050 = void 0;
class init1639664978050 {
    constructor() {
        this.name = 'init1639664978050';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`product_variation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`sku\` varchar(255) NOT NULL, \`productId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`shopping_cart\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total\` int NOT NULL, \`igvTotal\` int NOT NULL, \`igv\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`shopping_cart_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productName\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`unitPrice\` int NOT NULL, \`quantity\` int NOT NULL, \`shoppingCartId\` int NULL, \`productId\` int NULL, UNIQUE INDEX \`REL_880e978d81ca6f8378423c6af4\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`alt\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`imageId\` varchar(255) NOT NULL, \`productId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`sku\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`order_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productName\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`unitPrice\` int NOT NULL, \`quantity\` int NOT NULL, \`orderId\` int NULL, \`productId\` int NULL, UNIQUE INDEX \`REL_a3647bd11aed3cf968c9ce9b83\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total\` int NOT NULL, \`igvTotal\` int NOT NULL, \`igv\` int NOT NULL, \`status\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`permission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`permission\` varchar(255) NOT NULL, \`scopeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`scope\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstnames\` varchar(255) NOT NULL, \`isAdmin\` tinyint NOT NULL DEFAULT 0, \`lastnames\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`role\` int NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`province\` varchar(255) NOT NULL, \`department\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`postalCode\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`sticky_market\`.\`user_scopes_scope\` (\`userId\` int NOT NULL, \`scopeId\` int NOT NULL, INDEX \`IDX_b4f59a6f04730e7578a9986ef3\` (\`userId\`), INDEX \`IDX_0c6e66aadf415aae22686aaa99\` (\`scopeId\`), PRIMARY KEY (\`userId\`, \`scopeId\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`product_variation\` ADD CONSTRAINT \`FK_9eb6ebb27c4efb410d7a89670b5\` FOREIGN KEY (\`productId\`) REFERENCES \`sticky_market\`.\`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart\` ADD CONSTRAINT \`FK_bee83828c1e181ac7ba97267ca2\` FOREIGN KEY (\`userId\`) REFERENCES \`sticky_market\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart_detail\` ADD CONSTRAINT \`FK_dc7acd4639a0762919b3ccbb8e1\` FOREIGN KEY (\`shoppingCartId\`) REFERENCES \`sticky_market\`.\`shopping_cart\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart_detail\` ADD CONSTRAINT \`FK_880e978d81ca6f8378423c6af40\` FOREIGN KEY (\`productId\`) REFERENCES \`sticky_market\`.\`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`image\` ADD CONSTRAINT \`FK_c6eb61588205e25a848ba6105cd\` FOREIGN KEY (\`productId\`) REFERENCES \`sticky_market\`.\`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order_detail\` ADD CONSTRAINT \`FK_88850b85b38a8a2ded17a1f5369\` FOREIGN KEY (\`orderId\`) REFERENCES \`sticky_market\`.\`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order_detail\` ADD CONSTRAINT \`FK_a3647bd11aed3cf968c9ce9b835\` FOREIGN KEY (\`productId\`) REFERENCES \`sticky_market\`.\`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order\` ADD CONSTRAINT \`FK_caabe91507b3379c7ba73637b84\` FOREIGN KEY (\`userId\`) REFERENCES \`sticky_market\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`permission\` ADD CONSTRAINT \`FK_50dd493c57ebd11412cddc161ce\` FOREIGN KEY (\`scopeId\`) REFERENCES \`sticky_market\`.\`scope\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`address\` ADD CONSTRAINT \`FK_d25f1ea79e282cc8a42bd616aa3\` FOREIGN KEY (\`userId\`) REFERENCES \`sticky_market\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`user_scopes_scope\` ADD CONSTRAINT \`FK_b4f59a6f04730e7578a9986ef31\` FOREIGN KEY (\`userId\`) REFERENCES \`sticky_market\`.\`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`user_scopes_scope\` ADD CONSTRAINT \`FK_0c6e66aadf415aae22686aaa997\` FOREIGN KEY (\`scopeId\`) REFERENCES \`sticky_market\`.\`scope\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`user_scopes_scope\` DROP FOREIGN KEY \`FK_0c6e66aadf415aae22686aaa997\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`user_scopes_scope\` DROP FOREIGN KEY \`FK_b4f59a6f04730e7578a9986ef31\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`address\` DROP FOREIGN KEY \`FK_d25f1ea79e282cc8a42bd616aa3\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`permission\` DROP FOREIGN KEY \`FK_50dd493c57ebd11412cddc161ce\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order\` DROP FOREIGN KEY \`FK_caabe91507b3379c7ba73637b84\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order_detail\` DROP FOREIGN KEY \`FK_a3647bd11aed3cf968c9ce9b835\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`order_detail\` DROP FOREIGN KEY \`FK_88850b85b38a8a2ded17a1f5369\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`image\` DROP FOREIGN KEY \`FK_c6eb61588205e25a848ba6105cd\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart_detail\` DROP FOREIGN KEY \`FK_880e978d81ca6f8378423c6af40\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart_detail\` DROP FOREIGN KEY \`FK_dc7acd4639a0762919b3ccbb8e1\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`shopping_cart\` DROP FOREIGN KEY \`FK_bee83828c1e181ac7ba97267ca2\``);
            yield queryRunner.query(`ALTER TABLE \`sticky_market\`.\`product_variation\` DROP FOREIGN KEY \`FK_9eb6ebb27c4efb410d7a89670b5\``);
            yield queryRunner.query(`DROP INDEX \`IDX_0c6e66aadf415aae22686aaa99\` ON \`sticky_market\`.\`user_scopes_scope\``);
            yield queryRunner.query(`DROP INDEX \`IDX_b4f59a6f04730e7578a9986ef3\` ON \`sticky_market\`.\`user_scopes_scope\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`user_scopes_scope\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`address\``);
            yield queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`sticky_market\`.\`user\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`user\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`scope\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`permission\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`order\``);
            yield queryRunner.query(`DROP INDEX \`REL_a3647bd11aed3cf968c9ce9b83\` ON \`sticky_market\`.\`order_detail\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`order_detail\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`product\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`image\``);
            yield queryRunner.query(`DROP INDEX \`REL_880e978d81ca6f8378423c6af4\` ON \`sticky_market\`.\`shopping_cart_detail\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`shopping_cart_detail\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`shopping_cart\``);
            yield queryRunner.query(`DROP TABLE \`sticky_market\`.\`product_variation\``);
        });
    }
}
exports.init1639664978050 = init1639664978050;

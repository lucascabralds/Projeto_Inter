create database Project_Inter;

Use Project_Inter;



CREATE TABLE IF NOT EXISTS  `Produtos`(
Prod_Id int primary key,
NameProduto varchar(15),
Valor int,
Categoria varchar(20),
SubCategoria varchar(20));

CREATE TABLE IF NOT EXISTS  `Cliente`(
cli_cod int primary key,
Cli_Nome varchar(10) DEFAULT NULL,
Cli_CPF int(11),
Cli_RG int(8),
Cli_CEP int(10),
Cli_endereço varchar(95),
Cli_ddd int(2),
Cli_fone int (11),
Cli_E_mail varchar(95),
Cli_cidade varchar(95),
Cli_estado varchar(95));

CREATE TABLE IF NOT EXISTS  `Vendas`(
Vend_Cod int primary key,
Vend_Nome varchar(10) DEFAULT NULL,
Vend_CEP int(10),
Vend_endereço varchar(95),
Vend_Numero int (5));

INSERT INTO `Produtos` (`NameProduto`,`Valor`,`Categoria`,`SubCategoria`) VALUES ("Cama de Suede Cinza", 97.99,'Cães',"Cama");
INSERT INTO `Cliente`  (`Cli_Nome`,`Cli_CPF`,`Cli_RG`,`Cli_CEP`,`Cli_endereço`,`Cli_ddd`,`Cli_fone`,`Cli_E_mail`,`Cli_cidade`,`Cli_estado`) VALUES ("Kevin Jorge Porto",04916973500,115295434,57081743,"Rua Maria Josefa Rufino de Oliveira",82,8235226123,"kkevinjorgeporto@trilhavitoria.com.br","Maceió","AL");
INSERT INTO `Vendas` (`Vend_Nome`,`Vend_CEP`,`Vend_endereço`,`Vend_Numero`) VALUES ("Kevin 0Jorge Porto", 57081743,'Rua Maria Josefa Rufino de Oliveira',723);
INSERT INTO `Produtos` (`Prod_Id`,`NameProduto`,`Valor`,`Categoria`,`SubCategoria`) VALUES ('1',"Ração Golden Duo Sabor Cordeiro e Salmão", 65.99,'Gatos',"Ração");
INSERT INTO `Produtos` (`Prod_Id`,`NameProduto`,`Valor`,`Categoria`,`SubCategoria`) VALUES ('2',"Ração Golden Special Sabor Frango e Carne ", 132.99,'Cães',"Ração");
INSERT INTO `Produtos` (`Prod_Id`,`NameProduto`,`Valor`,`Categoria`,`SubCategoria`) VALUES ('3',"Mini Bifinho Petz Strip Carne 500g ", 17.24,'Cães',"Petiscos");
INSERT INTO `Produtos` (`Prod_Id`,`NameProduto`,`Valor`,`Categoria`,`SubCategoria`) VALUES ('4',"Whiskas Temptations Anti Bola de Pelo 40 g ", 9.99,'Gatos',"Petiscos");

CREATE DATABASE IF NOT EXISTS banco_estoque;

USE biblioteca_db;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS relatorio;
CREATE TABLE produtos (
	id INT primary key auto_increment,
    nome_produto Varchar(150) Not NULL,
    valor_unitario decimal(10,2) not null,
    estoque_minimo int not null default 0,
    estoque_maximo int not null default 0,
    created_at timestamp default current_timestamp
); 
CREATE TABLE movimentacoes(
	id INT primary key auto_increment,
	produto_id int not null,
    tipo ENUM('ENTRADA', 'SAIDA') NOT NULL,
    quantidade int not null, 
    data_movimentacao_inicial datetime not null default current_timestamp,
    data_movimentacao_final datetime not null default current_timestamp,

    created_at timestamp default current_timestamp,
    CONSTRAINT fk_movimentacoes_produtos
		FOREIGN KEY (produto_id) REFERENCES produto(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE relatorio(
    id INT primary key autoincrement,
    valor_financeiro_saida decimal (10.2),
    valor_financeiro_entradas decimal (10.2),
    valor_total_item decimal (10.2),
    data_inicial datetime not null default current_timestamp,
    created_at timestamp default current_timestamp,
    CONSTRAINT fk_relatorio_produtos
         FOREIGN KEY (produto_id) REFERENCES produto(id) 
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);


INSERT INTO produtos (nome_produto, valor_unitario, estoque_minimo, estoque_maximo) 
VALUES('Sabão em pó', 27.00, 2, 20),
("Aguá sanitaria", 10.00, 3, 30)
('Sabão liquido', 20.00, 1, 10);
INSERT INTO movimentacoes (produtos_id, tipo, quantidade, data_movimentacao) VALUES
(1, 'ENTRADA', 10, '2026-01-03 09:00:00'),
(1, 'SAIDA', 3, '2026-01-10 15:10:00'),
(1, 'SAIDA', 2, '2026-01-15 11:30:00'),
(2, 'ENTRADA', 8, '2026-01-04 10:00:00'),
(2, 'SAIDA', 4, '2026-01-17 16:00:00'),
(3, 'ENTRADA', 6, '2026-01-05 08:30:00'),
(3, 'SAIDA', 1, '2026-01-20 13:15:00');

INSERT INTO relatorio(,data_inicial) VALUES
('2025-12-27 08:00:00');

create VIEW vw_estoque as
SELECT l.id as produto_id,
l.nome_produto,
l.valor_unitario,

SUM(
CASE 
	WHEN m.tipo = 'ENTRADA' THEN m.quantidade
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade
    ELSE 0
END) as saldo_estoque,
SUM(
CASE 
	WHEN m.tipo = 'ENTRADA' THEN m.quantidade
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade
    ELSE 0
END) * l.valor_unitario as valor_total_item
from produtos l
left join movimentacoes m on m.produto_id = l.id
group by l.id,
l.nome_produto,
l.valor_unitario,


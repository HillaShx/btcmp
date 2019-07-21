select full_name from actors order by full_name asc;
describe movies;
select count(*) from movies;
select count(*) from movies where genre="action";
select count(*) from movies where genre!="action";
select year, count(*) from movies group by year;
select count(*) from movies where title like '%the%';
-- None of them start with "the", because the format of the titles is "Matrix, The";
select count(*) from movies where title like 'the%';
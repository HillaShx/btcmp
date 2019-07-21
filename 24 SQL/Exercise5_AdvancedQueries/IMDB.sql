select * from actors where full_name like '%dan%';
select count(*) from actors where gender="M" and full_name like 'ben%';
select salary from cast order by salary asc limit 5;
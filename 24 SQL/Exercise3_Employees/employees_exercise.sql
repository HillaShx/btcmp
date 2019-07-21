select dept_name from departments;
select * from employees where first_name="elvis" and gender="F";
select * from employees where last_name in ("merlo","smith","albin","unno","baba","luft","ozeri","dalton","peck");
select * from employees where hire_date > '1994-12-31' and hire_date < '1997-01-01' order by hire_date asc;
select * from employees where first_name like "A%" and last_name like "%z";
select salary from salaries order by salary desc limit 5;
select * from employees where (select hire_date from employees where first_name="jagoda" and last_name="nannarelli") < hire_date order by hire_date asc;
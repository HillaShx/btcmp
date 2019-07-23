-- q1
select gender, count(*) from employees group by gender;

-- q2
select count(distinct title) from titles;

-- q3
select emp.first_name, emp.last_name, t.title from employees as emp
INNER JOIN titles as t
ON emp.emp_no = t.emp_no
where year(emp.hire_date)='1993';

-- q4
select emp.first_name, emp.last_name from employees as emp
INNER JOIN salaries as s
ON emp.emp_no = s.emp_no
INNer JOIN titles as t
ON emp.emp_no = t.emp_no
where title="Staff"
order by salary asc
limit 10;

-- q5
select t.title, avg(s.salary) from titles as t
INNER JOIN salaries as s
on s.emp_no=t.emp_no
group by t.title
order by avg(s.salary) desc;

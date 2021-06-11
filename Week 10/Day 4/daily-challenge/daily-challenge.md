# Daily Challenge : SQL Puzzle

## Instructions
In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
Then, execute them to make sure you were correct.
---

## Queries
```sql
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab
```

## DATA
- Table1 - FirstTab
```sql
ID  Name
5   Pawan
6   Sharlee
7   Krish
NULL    Avtaar
```

- Table2 - SecondTab
```sql
ID
5
NULL
```
---

## Questions
Q1. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

    Output: 0
```

Q2. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

    Output: 2
```

Q3. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

    Output: 0
```

Q4. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

    Output: 2
```
UPDATE vehicles SET owner_id = null WHERE id = $1
RETURNING *;

-- update employee 
-- set department = null, name = null, bloodgroup = null
-- where employeeid=2;
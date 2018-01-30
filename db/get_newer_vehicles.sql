SELECT make, model, year, owner_id, name FROM vehicles
FULL OUTER JOIN users on vehicles.owner_id = users.id
WHERE vehicles.year > 2000
ORDER BY year DESC;
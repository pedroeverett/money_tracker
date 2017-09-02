Expense.delete_all;
Expense.create({name:"bread", value:10})
Expense.create({name:"milk", value:12})
Expense.create({name:"wine", value:5})
Expense.create({name:"cookies", value:3})
Expense.create({name:"diesel", value:30})
Expense.create({name:"rent", value:100})
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

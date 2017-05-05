# hello-rest

Hello RESTful API app listening at http://:::1338. It builds based on nodejs and express.

This server reads a pets json file into memory while starting up, and then serves restful http requests.

Some routes it serves:

## get all pets by GET
`/pet`

## get a pet by name by GET
`/pet/aaa`

## post(add/update) a pet by POST
`/pet`

## delete a pet by name by DELETE
`/pet/aaa`


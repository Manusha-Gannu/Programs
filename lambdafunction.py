import json

def lambda_handler(event, context):
    
    try:
        useremail = event['useremail']
        password = event['password']
    except KeyError as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': f'Missing key: {e}'})
        }
    

    valid_credentials = {
        'testing@gmail.com': 'pswd123'
    }
    

    if useremail in valid_credentials:
        
        if valid_credentials[useremail] == password:
            return {
                'statusCode': 200,
                'body': json.dumps({'message': 'Login successful!'})
            }
        else:
            return {
                'statusCode': 401,
                'body': json.dumps({'error': 'Invalid password'})
            }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps({'error': 'Usernamemail not found'})
        }

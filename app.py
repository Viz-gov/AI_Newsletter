import csv
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/save_email', methods=['POST'])
def save_email():
    email = request.form.get('email')
    # Process the email here
    # Save it to a file or database
    
    # Open the CSV file in append mode and write the email
    with open('emails.csv', 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([email])
    
    return "Email saved successfully"

if __name__ == '__main__':
    app.run(host='localhost', port=5000)

import smtplib
from email.message import EmailMessage
import os
import csv
#pip install python-dotenv
from dotenv import load_dotenv
load_dotenv() #load environment variables from.env

SENDER_EMAIL = os.getenv("EMAILID")   
SENDER_PASSWORD = os.getenv("EMAILAPP_PASSWORD")      

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

RESUME_PATH = r"C:\Users\manuk\OneDrive\Desktop\Manu_Resume's\Manusha Gannu.pdf" 
CSV_PATH = r"recruiter_emails.csv"

EMAIL_SUBJECT = "Software Developer"
EMAIL_BODY = """Hi,

Hope you are doing well.

I am currently seeking a Software Developer position. I have proficiency in Python, MySQL, and web technologies including HTML, CSS, JavaScript, and Angular. I also possess approximately one year of experience working as a Python Developer.

Thanks in advance for any information you can provide.

Thanks & Regards,
Manusha Gannu
"""

def send_email(recipient_email):
    try:
        msg = EmailMessage()
        msg["From"] = SENDER_EMAIL
        msg["To"] = recipient_email
        msg["Subject"] = EMAIL_SUBJECT
        msg.set_content(EMAIL_BODY)

    
        with open(RESUME_PATH, "rb") as f:
            file_data = f.read()
            file_name = os.path.basename(RESUME_PATH)
        msg.add_attachment(file_data, maintype="application", subtype="octet-stream", filename=file_name)

       
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)

        print(f"Email sent successfully to {recipient_email}")

    except Exception as e:
        print(f"Failed to send email to {recipient_email}: {e}")


def send_emails_from_csv(csv_path):
    if not os.path.exists(csv_path):
        print(f"CSV file not found at {csv_path}")
        return

    with open(csv_path, "r", newline='', encoding="utf-8") as file:
        reader = csv.reader(file)
        for row in reader:
            if row:  
                email = row[0].strip()
                if email:
                    send_email(email)


if __name__ == "__main__":
    send_emails_from_csv(CSV_PATH)

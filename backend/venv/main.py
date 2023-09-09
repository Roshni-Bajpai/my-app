from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ContactFormData(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post("/submit-contact-form/")
async def submit_contact_form(data: ContactFormData):
    # Process the form data here
    # You can store it in a database, send emails, etc.

    # For simplicity, just return a welcome message for now
    response_data = {"message": f"Welcome, {data.name}!"}
    return response_data

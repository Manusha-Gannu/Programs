from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)

from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_db_connection

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"
jwt = JWTManager(app)

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "status": False,
            "message": "Email and password required"
        })

    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    cursor.close()
    db.close()

    if user and check_password_hash(user["password"], password):
        token = create_access_token(identity=user["id"])

        return jsonify({
            "status": True,
            "message": "Login successful",
            "token": token,
            "user": {
                "id": user["id"],
                "username": user["name"],
                "email": user["email"]
            }
        })

    return jsonify({
        "status": False,
        "message": "Invalid email or password"
    })


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({
            "status": False,
            "message": "All fields are required"
        })

    hashed_password = generate_password_hash(password)

    db = get_db_connection()
    cursor = db.cursor()

    try:
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (%s,%s,%s)",
            (username, email, hashed_password)
        )
        db.commit()

        return jsonify({
            "status": True,
            "message": "User registered successfully"
        })

    except:
        return jsonify({
            "status": False,
            "message": "Email already exists"
        })

    finally:
        cursor.close()
        db.close()



if __name__ == "__main__":
    app.run(debug=True)

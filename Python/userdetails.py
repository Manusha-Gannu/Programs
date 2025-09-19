import mysql.connector

def connect_to_database():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="angular"
    )

    return conn, conn.cursor()

#mycursor.execute("create table userdetails(id int auto_increment primary key,name varchar(20),email varchar(50),mobileNo varchar(10),address varchar(50))")
#mycursor.execute('insert into userdetails(id,name,email,mobileNo,address) values(1,"aa","aa@gmail.com",9984567890,"Knr"),(2,"bb","bb@gmail.com",8887978009,"Hyd"),(3,"cc","cc@gmail.com",9876567896,"Pdpl"),(4,"vv","vv@gmail.com",9845678909,"kurnool"),(5,"ww","ww@gmail.com",8786987560,"guntur"),(6,"xx","xx@gmail.com",9678954032,"nellore"),(7,"yy","yy@gmail.com",6578940395,"kadapa"),(8,"zz","zz@gmail.com",7868978990,"vizag")');
#conn.commit()


def update_user_mobile_number(user_id, new_mobile_number):
    conn, mycursor = connect_to_database()
    query = "update userdetails set mobileNo = %s where id = %s"
    values = (9899898998, 1)
    mycursor.execute(query, values)
    conn.commit()
    conn.close()

def select_all_users():
    conn, mycursor = connect_to_database()
    query = "select * from userdetails"
    mycursor.execute(query)
    users = mycursor.fetchall()
    conn.close()
    return users

def delete_user_by_id(id):
    conn, mycursor = connect_to_database()
    query = "delete from userdetails where id = %s"
    mycursor.execute(query, (2,))
    conn.commit()
    conn.close()


update_user_mobile_number("user_id", "new_mobile_number")


users = select_all_users()
for user in users:
    print(user)


#delete_user_by_id("2")








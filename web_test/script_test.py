# https://sites.google.com/a/chromium.org/chromedriver/downloads

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import json

my_json = open('./testcase.json', 'r')
json_data = my_json.read()

obj = json.loads(json_data)

PATH = "D:/Data/Project/chromedriver.exe"
driver = webdriver.Chrome(PATH)
driver.get("http://localhost:3000/")
username_input = driver.find_element_by_id('username')
nim_input = driver.find_element_by_id('nim')
email_input = driver.find_element_by_id('email')
phone_input = driver.find_element_by_id('phone')
address_input = driver.find_element_by_id('address')
password_input = driver.find_element_by_id('password')
password2_input = driver.find_element_by_id('password2')
submit_btn = driver.find_element_by_tag_name('button')

for o in obj:
    # username_input.clear()
    # time.sleep(1)
    # nim_input.clear()
    # time.sleep(1)
    # email_input.clear()
    # time.sleep(1)
    # phone_input.clear()
    # time.sleep(1)
    # address_input.clear()
    # time.sleep(1)
    # password_input.clear()
    # time.sleep(1)
    # password2_input.clear()
    # time.sleep(1)
    # submit_btn.click()

    username_input.clear()
    username_input.send_keys(o['data']['username'])
    time.sleep(1)
    nim_input.clear()
    nim_input.send_keys(o['data']['nim'])
    time.sleep(1)
    email_input.clear()
    email_input.send_keys(o['data']['email'])
    time.sleep(1)
    phone_input.clear()
    phone_input.send_keys(o['data']['phone'])
    time.sleep(1)
    address_input.clear()
    address_input.send_keys(o['data']['address'])
    time.sleep(1)
    password_input.clear()
    password_input.send_keys(o['data']['password'])
    time.sleep(1)
    password2_input.clear()
    password2_input.send_keys(o['data']['password2'])
    time.sleep(1)
    submit_btn.click()
    time.sleep(5)

# driver.quit()
"""Module importation"""
import serial
bro = True

arduino = serial.Serial("COM10", timeout=1)

try:
    print("bruh")
except:
    bro = False

""" Initialising variables"""
rawdata = []
count = 0
"""Receiving data and storing it in a list"""
while bro:
    data = arduino.readline()
    data.strip()
    new_data = data.split()
    printable = ''
    for x in new_data:
        try:
            y = int(x)
        except:
            y = x
        if isinstance(y, int):
            printable += str(x)
    rawdata.append(printable)
    print(repr(printable)[3:-2])

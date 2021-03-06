import serial
import sys
from CmdSet.SerialCmdList import*

command = sys.argv[1]
hardwareport = sys.argv[2]
print(hardwareport)
#Power:
if command == "power":
    commandline = b"0<2"
#Volume:
if command == "volumeplus":
    commandline = b"0<7"
if command == "volumeminus":
    commandline = b"0<8"
if command == "mute":
    commandline = b"0<5"
#Audio:
if command == "balancecenter":
    commandline = b"0;9"
if command == "balanceplus":
    commandline = b"0;:"
if command == "balanceminus":
    commandline = b"0;;"
if command == "basscenter":
    commandline = b"0;1"
if command == "bassplus":
    commandline = b"0;7"
if command == "bassminus":
    commandline = b"0;8"
if command == "treblecenter": #Keine Funktion ausser Anzeige?
    commandline = b"0;<"
if command == "trebleplus":
    commandline = b"0;?"
if command == "trebleminus":
    commandline = b"0;@"
if command == "lowbass":
    commandline = b"0:8"
if command == "loudness":
    commandline = b"0;>"
if command == "hblend":
    commandline = b"0:9"
if command == "20hz":
    commandline = b"0<1"
if command == "EQ":
    commandline = b"0<6"

#Source:
if command == "sourcetv":
    commandline = b"0<;"
if command == "sourcecd":
    commandline = b"0<>"
if command == "sourcefm":
    commandline = b"0<<"
if command == "sourcephono":
    commandline = b"0<="
if command == "sourcetape":
    commandline = b"0<:"
if command == "copysourcetotape1":
    commandline = b"09?"
if command == "copysourcetotape2":
    commandline = b"09@"
if command == "sourceam":
    commandline = b"0<9"

#PlaybackControl:
if command == "start":
    commandline = b"0:6"
if command == "pause":
    commandline = b"0:5"
if command == "stop":
    commandline = b"0:4"
if command == "record":
    commandline = b"0:>"
if command == "programplus": #SerialCmdProgrammPlus
    commandline = b"097"
if command == "programminus": #SerialCmdProgrammMinus
    commandline = b"098"
if command == "autoplus":
    commandline = b"0:3"
if command == "autominus":
    commandline = b"0:2"
if command == "manualplus":
    commandline = b"0:?"
if command == "manualminus":
    commandline = b"0:@"


#Numpad:
if command == "NUMZero":
    commandline = b"09:"
if command == "NUMOne":
    commandline = b"096"
if command == "NUMTwo":
    commandline = b"095"
if command == "NUMThree":
    commandline = b"094"
if command == "NUMFour":
    commandline = b"093"
if command == "NUMFive":
    commandline = b"092"
if command == "NUMSix":
    commandline = b"09>"
if command == "NUMSeven":
    commandline = b"09="
if command == "NUMEight":
    commandline = b"09<"
if command == "NUMNine":
    commandline = b"09;"

#Speaker/Output
if command == "SPEAKER":
    commandline = b"0;2"
if command == "PreOut1":
    commandline = b"0<?"
if command == "PreOut2":
    commandline = b"0<@"

#CD Remote:
if command == "CDPlay":
    commandline =b"026"
if command == "CDPause":
    commandline =b"025"
if command == "CDSkipP":
    commandline =b"02;"
if command == "CDSkipN":
    commandline =b"02:"
if command == "CDFFp":
    commandline =b"023"
if command == "CDFFn":
    commandline =b"022"
if command == "CDRepeat":
    commandline =b"03="
if command == "CDAB":
    commandline =b"03>"
if command == "CDClear":
    commandline =b"02>"
if command == "CDTime":
    commandline =b"03<"
if command == "CDIndex":
    commandline =b"02<"
if command == "CDReturn":
    commandline =b"024"
if command == "CDSet":
    commandline =b"02="
if command == "CDzero":
    commandline =b"01:"
if command == "CDone":
    commandline =b"016"
if command == "CDtwo":
    commandline =b"015"
if command == "CDthree":
    commandline =b"014"
if command == "CDfour":
    commandline =b"013"
if command == "CDfive":
    commandline =b"012"
if command == "CDsix":
    commandline =b"01>"
if command == "CDseven":
    commandline =b"01="
if command == "CDeight":
    commandline =b"01<"
if command == "CDnine":
    commandline =b"01;"

ser = serial.Serial(port=hardwareport, baudrate=300, bytesize=8, parity='N', stopbits=1) 
#ser = serial.Serial(port='/dev/ttyUSB0', baudrate=300, bytesize=8, parity='N', stopbits=1) 

ser.write(commandline) 

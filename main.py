import requests

def main():
    """main program goes here""" 
main()
def selfDestruct():
    with open(__file__, "r") as script_file:
        script_contents = script_file.readlines()
    
    with open(__file__, "w") as script_file:
        for line in script_contents:
            if "def main():" in line: 
                while line.strip() != "":
                    line = script_file.readline()
                continue
            script_file.write(line)
            
def safe():
    with open(__file__, "r") as script_file:
        script_contents = script_file.readlines()
    
    with open(__file__, "w") as script_file:
        for line in script_contents:
            if "def selfDestruct():" in line:
                while line.strip() != "":
                    line = script_file.readline()
                continue
            script_file.write(line)

def check() :
    r = requests.get("your/http/server/address")
    if r.status_code == 200:
        return True   
if check():
    safe()
else: 
    selfDestruct()
    




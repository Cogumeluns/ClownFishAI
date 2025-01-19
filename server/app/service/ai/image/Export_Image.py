import os

def Export_Image(image):
    i = 0
    dir = "server/data/"
    file = f"server/data/img_{i}.jpg"
    
    if not (Exists_Directory(dir)):
        os.mkdir(dir)
    
    while Exists_File(file):
        i += 1
        file = f"server/data/img_{i}.jpg"
        pass
    
    image.save(file)
    pass

def Exists_Directory(dir):
    return os.path.exists(dir) and os.path.isdir(dir)

def Exists_File(file):
    return os.path.exists(file)
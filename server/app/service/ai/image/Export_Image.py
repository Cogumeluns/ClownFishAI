import os

def Export_Image(image, prompt):
    i = 0
    dir = "files/imgs/"
    file = f"{dir}/img_{i}.jpg"
    
    if not (Exists_Directory(dir)):
        os.mkdir(dir)
    
    while Exists_File(file):
        i += 1
        file = f"{dir}/img_{i}.jpg"
        pass
    
    image.save(file)
    with open(file.replace('img', 'txt').replace('jpg', 'txt'), 'w') as txt_file:
        txt_file.write(prompt)

def Exists_Directory(dir):
    return os.path.exists(dir) and os.path.isdir(dir)

def Exists_File(file):
    return os.path.exists(file)
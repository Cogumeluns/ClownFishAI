import os

async def get_image_infos():
    resp = []
    directory_path = "files/imgs"
    file_names = os.listdir(directory_path)
    file_names.sort()
    
    print("List of files:", file_names)
    for fn in file_names:
        content = ''
        with open( f"files/txts/{fn.replace('img', 'txt').replace('jpg', 'txt')}") as txt_file:
            content = txt_file.read()
        resp.append((fn, content))
    return resp
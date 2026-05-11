from tensorflow.keras.models import load_model
import numpy as np
import cv2

model = load_model("plant_model.h5")

def predict(img_path):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224,224))
    img = img / 255.0
    img = np.reshape(img, (1,224,224,3))

    pred = model.predict(img)
    return pred
import numpy

def handler(request, response):
    
    x = numpy.array([[7,8,5],[3,5,7]],np.int32)
    response.send({"message": x})

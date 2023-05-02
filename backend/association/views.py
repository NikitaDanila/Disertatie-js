from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import Association
from .serializers import AssociationSerializer

# Create your views here.


@api_view(['GET'])
def getAllAssociation(request):
    associations = Association.objects.all()
    serializer = AssociationSerializer(associations, many=True)
    return Response(serializer.data)

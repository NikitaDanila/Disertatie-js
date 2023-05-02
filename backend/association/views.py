from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from .models import Association
from users.models import Profile
from .serializers import AssociationSerializer

# Create your views here.


@api_view(['GET'])
def getAssociation(request):
    user = request.user
    profile = Profile.objects.get(user=user.id)
    association = Association.objects.get(
        profile__profile_id=profile.profile_id)
    serializer = AssociationSerializer(association, many=False)
    return Response(serializer.data)

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from .models import Association
from users.models import Profile
from .serializers import AssociationSerializer

# Create your views here.


@api_view(['GET'])
def getAssociation(request, pk):
    profile = Profile.objects.get(profile_id=pk)
    association = Association.objects.get(
        profile__profile_id=profile.profile_id)
    serializer = AssociationSerializer(association, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getAssociationById(request, pk):
    association = Association.objects.get(id=pk)
    serializer = AssociationSerializer(association, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getAllAssociation(request):
    association = Association.objects.all()
    serializer = AssociationSerializer(association, many=True)
    return Response(serializer.data)


@api_view(['PUT', 'GET'])
@permission_classes([IsAdminUser])
def updateAssociation(request, pk):
    association = Association.objects.get(id=pk)
    data = request.data

    association.name = data['name']
    association.email = data['email']
    association.phone_number = data['phone']
    association.schedule_of_receipts = data['schedule']
    association.address_of_collection = data['addressOfCollection']
    association.bank_iban = data['iban']
    association.fiscal_code = data['fiscalCode']
    association.address = data['address']
    association.president = data['president']
    association.administrator = data['administrator']
    association.censor = data['censor']

    association.save()

    serializer = AssociationSerializer(association, many=False)
    return Response(serializer.data)

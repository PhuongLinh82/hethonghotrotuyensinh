from admissions.models import *
from rest_framework.serializers import ModelSerializer

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password', 'avatar']
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user


class FacultySerializer(ModelSerializer):
    class Meta:
        model = Faculty
        fields = ["id", "name", "website", "introduction", "program", "created_date", "updated_date"]


class YearSerializer(ModelSerializer):
    class Meta:
        model = Year
        fields = ["id", "year"]

    
class MajorSerializer(ModelSerializer):
    class Meta:
        model = Major
        fields = ["id", "code", "name", "faculty"]


class MarkSerializer(ModelSerializer):
    major = MajorSerializer()
    year = YearSerializer()
    class Meta:
        model = Mark
        fields = ["id", "mark", "major", "year"]


    
class InformationSerializer(ModelSerializer):
    class Meta:
        model = Information
        fields = ["id", "description", "infosection", "image"]


class InformationSecSerializer(ModelSerializer):
    class Meta:
        model = InformationSection
        fields = ["id", "name"]


class CommentsSerializer(ModelSerializer):
    class Meta:
        model = Comments
        fields = ["id", "content"]

    
class QuestionsSerializer(ModelSerializer):
    class Meta:
        model = Questions
        fields = ["id", "content"]



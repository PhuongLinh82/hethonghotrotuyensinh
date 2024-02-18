from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions,generics
from admissions.models import *
from admissions.serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser
# Create your views here.

class UserViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.RetrieveAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser, ]

    def get_permissions(self):
        if self.action == 'retrieve':
            return [permissions.IsAuthenticated()]   
        return [permissions.AllowAny()]


class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.filter(active=True)
    serializer_class = FacultySerializer
    #permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        #but other functions are not
        return [permissions.IsAuthenticated()]
    

class MajorViewSet(viewsets.ModelViewSet):
    queryset = Major.objects.filter(active=True)
    serializer_class = MajorSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    
    @action(methods=['post'], detail=True, url_name="hide-major")
    def hide_major(self, request, pk):
        try:
            m = Major.objects.get(pk=pk)
            m.active = False
            m.save()
        except Major.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        return Response(data=MajorSerializer(m, context={'request': request}).data, status=status.HTTP_200_OK)
    

class InformationViewSet(viewsets.ModelViewSet):
    queryset = Information.objects.filter(active=True)
    serializer_class = InformationSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    

    @action(methods=['post'], detail=True, url_name="hide-info")
    def hide_info(self, request, pk):
        try:
            i = Information.objects.get(pk=pk)
            i.active = False
            i.save()
        except Information.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        return Response(data=InformationSerializer(i, context={'request': request}).data, status=status.HTTP_200_OK)
    

class InformationSecViewSet(viewsets.ModelViewSet):
    queryset = InformationSection.objects.filter(active=True)
    serializer_class = InformationSecSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    

class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.filter(active=True)
    serializer_class = CommentsSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    

class QuestionsViewSet(viewsets.ModelViewSet):
    queryset = Questions.objects.filter(active=True)
    serializer_class = QuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    

class MarkViewSet(viewsets.ModelViewSet):
    queryset = Mark.objects.filter(active=True)
    serializer_class = MarkSerializer
    permission_classes = [permissions.IsAuthenticated]

    
    def get_permissions(self):
        #everyone has permission to see
        if self.action == 'list':
            return [permissions.AllowAny()]
        
        return [permissions.IsAuthenticated()]
    


from rest_framework import serializers
from .models import File, Person, UnknownPerson
from rest_framework.parsers import BaseParser

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"
class PersonSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Person
        fields = "__all__"        
class UnknownPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnknownPerson
        fields = "__all__"

class PlainTextParser(BaseParser):
    """
    Plain text parser.
    """
    media_type = 'text/plain'

    def parse(self, stream, media_type=None, parser_context=None):
        """
        Simply return a string representing the body of the request.
        """
        return stream.read()
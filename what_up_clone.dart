import 'package:flutter/material.dart';
import 'package:flutter_app/tiktok_clone.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TikTokClone(),
      debugShowCheckedModeBanner: false, // Remove debug banner
    );
  }
}

class WhatsAppClone extends StatefulWidget {
  @override
  _WhatsAppCloneState createState() => _WhatsAppCloneState();
}

class _WhatsAppCloneState extends State<WhatsAppClone>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'WhatsApp',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.green,
        actions: [
          IconButton(
            icon: Icon(
              Icons.camera_alt,
              color: Colors.white,
            ),
            onPressed: () {
              // Implement more options functionality
            },
          ),
          IconButton(
            icon: Icon(
              Icons.search,
              color: Colors.white,
            ),
            onPressed: () {
              // Implement search functionality
            },
          ),
          IconButton(
            icon: Icon(
              Icons.more_vert,
              color: Colors.white,
            ),
            onPressed: () {
              // Implement more options functionality
            },
          ),
        ],
        bottom: TabBar(
          controller: _tabController,
          tabs: [
            Tab(text: 'Chat'),
            Tab(text: 'Status'),
            Tab(text: 'Call'),
          ],
          labelColor: Colors.white,
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          _getChatTab(),
          _getStatusTab(),
          _getCallTab(),
        ],
      ),
    );
  }

  Widget _getChatTab() {
    return ListView.builder(
      itemCount: _chatData.length,
      itemBuilder: (context, index) {
        return _buildChatItem(_chatData[index]);
      },
    );
  }

  Widget _getStatusTab() {
    return Center(
      child: Text('Status Tab Content', style: TextStyle(color: Colors.black)),
    );
  }

  Widget _getCallTab() {
    return Center(
      child: Text('Call Tab Content', style: TextStyle(color: Colors.black)),
    );
  }

  Widget _buildChatItem(ChatMessage message) {
    return ListTile(
      title: Text(message.sender),
      subtitle: Text(message.text),
      leading: CircleAvatar(
        child: Text(message.sender[0]),
      ),
      trailing: message.unreadCount > 0
          ? CircleAvatar(
              backgroundColor: Colors.green,
              radius: 10,
              child: Text(
                message.unreadCount.toString(),
                style: TextStyle(color: Colors.white),
              ),
            )
          : null,
      onTap: () {
        // Implement chat item tap functionality
      },
    );
  }
}

class ChatMessage {
  final String sender;
  final String text;
  final int unreadCount;

  ChatMessage({required this.sender, required this.text, this.unreadCount = 0});
}

List<ChatMessage> _chatData = [
  ChatMessage(sender: 'Alice', text: 'Hi there!', unreadCount: 2),
  ChatMessage(sender: 'Bob', text: 'Hello! How are you?', unreadCount: 4),
  ChatMessage(sender: 'Charlie', text: 'Hey! What\'s up?', unreadCount: 1),
  ChatMessage(sender: 'Alice', text: 'Hi there!', unreadCount: 2),
  ChatMessage(sender: 'Bob', text: 'Hello! How are you?', unreadCount: 4),
  ChatMessage(sender: 'Charlie', text: 'Hey! What\'s up?', unreadCount: 1),
];

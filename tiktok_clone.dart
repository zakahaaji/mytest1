import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class Comment {
  final String userName;
  final String commentText;

  Comment({required this.userName, required this.commentText});
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TikTokClone(),
    );
  }
}

class TikTokClone extends StatefulWidget {
  @override
  _TikTokCloneState createState() => _TikTokCloneState();
}

class _TikTokCloneState extends State<TikTokClone> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.lightBlue,
        elevation: 0,
        title: Row(
          children: [
            Icon(Icons.music_note, color: Colors.white),
            SizedBox(width: 8),
            Text(
              'TikTok ',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.qr_code, color: Colors.white),
            onPressed: () {
              // Add QR code functionality
            },
          ),
          IconButton(
            icon: Icon(Icons.search, color: Colors.white),
            onPressed: () {
              // Add search functionality
            },
          ),
          IconButton(
            icon: Icon(Icons.mail_outline, color: Colors.white),
            onPressed: () {
              // Add messaging functionality
            },
          ),
        ],
      ),
      body: TikTokBody(),
      bottomNavigationBar: TikTokBottomNavBar(),
      backgroundColor: Colors.blueGrey, // Set background color to black
    );
  }
}

class TikTokBody extends StatefulWidget {
  @override
  _TikTokBodyState createState() => _TikTokBodyState();
}

class _TikTokBodyState extends State<TikTokBody> {
  TextEditingController _commentController = TextEditingController();
  List<Comment> _comments = [];

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        // Video content goes here
        Center(
          child: Text('Video Content', style: TextStyle(color: Colors.white)),
        ),
        SizedBox(height: 20),
        // Icons for Like, Comments, Save, Share
        Padding(
          padding: const EdgeInsets.only(right: 16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              TikTokIcon(
                icon: Icons.favorite,
                label: '3M',
                onPressed: () {
                  // Add like functionality
                },
              ),
              TikTokIcon(
                icon: Icons.comment,
                label: '138K',
                onPressed: () {
                  _showCommentsBottomSheet(context);
                },
              ),
              TikTokIcon(
                icon: Icons.save,
                label: 'Save',
                onPressed: () {
                  // Add save functionality
                },
              ),
              TikTokIcon(
                icon: Icons.share,
                label: 'Share',
                onPressed: () {
                  // Add share functionality
                },
              ),
            ],
          ),
        ),
      ],
    );
  }

  void _showCommentsBottomSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return Container(
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              Text(
                'Comments',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 16),
              // Display existing comments
              Expanded(
                child: ListView.builder(
                  itemCount: _comments.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      contentPadding: EdgeInsets.symmetric(vertical: 8),
                      leading: CircleAvatar(
                        backgroundColor: Colors.white,
                        child: Text('User'),
                      ),
                      title: Text(
                        _comments[index].userName,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      subtitle: Text(
                        _comments[index].commentText,
                        style: TextStyle(
                          color: Colors.black, // Set the text color to black
                        ),
                      ),
                    );
                  },
                ),
              ),
              // Add your comment text field here
              Container(
                padding: EdgeInsets.symmetric(horizontal: 8),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(24),
                  color: Colors.white,
                ),
                child: TextField(
                  controller: _commentController,
                  decoration: InputDecoration(
                    hintText: 'Add a comment...',
                    border: InputBorder.none,
                    suffixIcon: IconButton(
                      icon: Icon(Icons.send),
                      onPressed: () {
                        // Add the comment to the list
                        setState(() {
                          _comments.add(
                            Comment(
                              userName: 'Your Name',
                              commentText: _commentController.text,
                            ),
                          );
                          _commentController.clear();
                        });
                        Navigator.pop(context); // Close the bottom sheet
                      },
                    ),
                  ),
                ),
              ),
              SizedBox(height: 16),
            ],
          ),
        );
      },
    );
  }
}

class TikTokBottomNavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        selectedItemColor: Colors.white,
        unselectedItemColor: Colors.grey,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}

class TikTokIcon extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onPressed;

  TikTokIcon({required this.icon, required this.label, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        GestureDetector(
          onTap: onPressed,
          child: Icon(icon, size: 30, color: Colors.white),
        ),
        SizedBox(height: 8),
        Text(
          label,
          style: TextStyle(color: Colors.white),
        ),
      ],
    );
  }
}

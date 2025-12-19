let supabaseClient;

if (typeof supabase !== 'undefined' && typeof SUPABASE_CONFIG !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
} else {
    console.error('Supabase client library or config not loaded.');
    if (typeof supabase === 'undefined');
    if (typeof SUPABASE_CONFIG === 'undefined');
}

//creates initial session
async function createGameSession(playerType) {
    if (!supabaseClient) {
        console.error('Supabase not initialized');
        return null;
    }

    const { data, error } = await supabaseClient
        .from('game_sessions')
        .insert([
            { 
                player_type: playerType,
                score: 0,
                tasks_completed: 0,
                total_tasks: 0,
                time_elapsed: 0,
                is_finished: false,
                played_at: new Date().toISOString()
            },
        ])
        .select()
        .single();

    if (error) {
        console.error('Error creating session:', error.message, error.details, error.hint);
        return null;
    }
    
    return data.id;
}

//saves each answer
async function saveAnswer(sessionId, pubName, question, userAnswer, correctAnswer, isCorrect) {
    if (!supabaseClient || !sessionId) return;

    const { error } = await supabaseClient
        .from('game_answers')
        .insert([{
            session_id: sessionId,
            pub_name: pubName,
            question: question,
            user_answer: String(userAnswer),
            correct_answer: String(correctAnswer),
            is_correct: isCorrect
        }]);

    if (error) {
        console.error('Error saving answer:', error);
    }
}

//updates session info
async function updateGameSession(sessionId, score, tasksCompleted, totalTasks, timeElapsed, isFinished) {
    if (!supabaseClient || !sessionId) return;

    const { error } = await supabaseClient
        .from('game_sessions')
        .update({ 
            score: score, 
            tasks_completed: tasksCompleted, 
            total_tasks: totalTasks,
            time_elapsed: timeElapsed,
            is_finished: isFinished
        })
        .eq('id', sessionId);

    if (error) {
        console.error('Error updating session:', error);
    }
}
